import React from 'react';

interface Iprops {

}
interface Istate{
    msg : string;

}

class PrintMessage extends React.Component<Iprops, Istate>{
    constructor(props: Iprops) {
        super(props);
        this.state = {
            msg : "Hello"
        }
    }

    printMessage = (msg:string) => {
        this.setState({
            msg : msg
        })
    };

    render() : React.ReactNode {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>{this.state.msg}</h1>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary m-2" onClick={this.printMessage.bind(this,"Good Morning")}>Good Morning</button>
                            <button className="btn btn-primary m-2" onClick={this.printMessage.bind(this,"Good Afternoon")}>Good Afternoon</button>
                            <button className="btn btn-primary m-2" onClick={this.printMessage.bind(this,"Good Evening")}>Good Evening</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default PrintMessage;