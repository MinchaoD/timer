import React, {Component} from 'react';

class Timer extends Component {
    constructor(props){
        super(props);   
        this.state = {
            text: '',
            timer: 0,
            count: 0
           
        }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
}

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

   

    handleClick = (e) => {
        e.preventDefault();
        clearInterval(this.state.count);
        // if not above the clearInterval code, then after you input 2nd task, both timers will run at the same time
        let sec = 0;
        this.setState({count: setInterval(() => {
            sec ++;
            // can also be sec = sec + 1 or ++ sec
            this.setState({timer: sec});
        }, 1000) });

        // if we don't need to run clearInterval code(line 27), then this above code can be just like:
        //setInterval(() => {
        //     sec = sec + 1;
        //     this.setState({timer: sec});
        // }, 1000)
        // but we need clearInterval code, so we need to assign this setInterval into a variable which is count here

    }

  

    render() {
    return (
        <div className = 'container-fluid' align="center">
           
                <form className='form'>
                    <div className = 'row'>
                        <input
                            className = 'text'
                            type = 'text'
                            id = 'text'
                            name = 'text'
                            onChange = {this.handleInputChange}
                            placeholder = 'task'
                        />
                    </div>
                    <br/>
                    <div className = 'row'>
                        <button onClick={this.handleClick}>
                            Start the Timer
                        </button>
                    </div>
               
                <h1>
                      {this.state.text}   {this.state.timer}
                </h1>
                </form>
               
        </div>
    )
    }

};

export default Timer;