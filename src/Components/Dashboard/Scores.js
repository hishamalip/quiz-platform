import React from 'react';

class Scores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 23, name: 'some quiz', position: 2, marks: 14 },
            { id: 1, name: 'Maria Anders', position: 2, marks: 14 },
            { id: 2, name: 'Germany', position: 2, marks: 14 },
            { id: 3, name: 'Berglunds snabbköp', position: 2, marks: 14 },
            { id: 4, name: 'Christina Berglund', position: 2, marks: 14 },
            { id: 5, name: 'Sweden', position: 2, marks: 14 },
            { id: 5, name: 'Centro comercial Moctezuma', position: 2, marks: 14 },
            { id: 6, name: 'Francisco Chang', position: 2, marks: 14 },
            { id: 7, name: 'Mexico', position: 2, marks: 14 }
            ]
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        var datatable = this.state.data.map((item, key) => <tr><td>{item.name}</td><td>{item.position}</td><td>{item.marks}</td></tr>);
        return (
            <div className="Scores">
                <div className="jumbotron" style={{ background: 'white', padding: '5vw' }}>
                    <div className="row">
                        <table id="scores">
                            <tr>
                                <th>Quiz</th>
                                <th>Position</th>
                                <th>Marks</th>
                            </tr>
                            {datatable}
                        </table>
                    </div>
                    {/* <!--div className="row">haha</div --> */}
                </div>
            </div>
        );
    }
}
export default Scores;