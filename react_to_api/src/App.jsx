import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films:[],
            people:[],
            loadFilms: false,
            loadPeople: false
        }
    }
    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
    }

    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err));
    }
    render() {
        if(this.state.loadFilms) {
            this.loadFilms();
            return this.state.films.map(film =>{
                return(
                    <div key={film.id} className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">{film.tilte}</h5>
                    <p className="card-text">{film.director}</p>
                    <h3 className="card-text">{film.description}</h3>
                    <a href={film.url} className="card-link">Go somewhere</a>
                </div>
            </div>
                )
            })
        } else if (this.state.loadPeople) {
            this.loadPeople();
            return this.state.people.map(person =>{
                return (
                    <div key={person.id} className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">{person.tilte}</h5>
                    <p className="card-text">{person.director}</p>
                    <h3 className="card-text">{person.description}</h3>
                    <a href={person.url} className="card-link">Go somewhere</a>
                </div>
            </div>
                )
            })
        } else {
            return (
                <React.Fragment>
                    <button onClick={() => this.setState({loadFilms:true})} className="btn btn-success">Load Films</button>
                    <button onClick={() => this.setState({loadPeople:true})} className="btn btn-success">Load People</button>
                </React.Fragment>
            )
        }
    }
}
export default App