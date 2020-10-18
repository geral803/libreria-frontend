import React, { Component } from 'react';
import classes from './App.module.css';
import getApiRequest from './apiRequest/getApiRequest';



class App extends Component {

  state = {
    bookList: []
  }

  async componentDidMount() {
    let data = await getApiRequest('/books/all');
    this.setState({
      bookList: data
    })
  }


  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Container}>
          <table>
            <thead>
              <tr>
                <th>Autor</th>
                <th>Titulo</th>
                <th>Anio de publicacion</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.bookList.length !== 0 ?
                  this.state.bookList.map((row) => {
                    return (
                      <tr>
                        <td>{row.author}</td>
                        <td>{row.title}</td>
                        <td>{row.published}</td>
                      </tr>
                    )
                  }) :
                  <div>
                    There are no books to show
                </div>
              }
            </tbody>
          </table>
          <br></br>
          <hr></hr>
          <br></br>
          <div>
            <form action="/action_page.php">
              <label for="fname">Autor:</label> <br></br>
              <input type="text" value="" />
              <br></br>
              <label for="fname">Titulo:</label> <br></br>
              <input type="text" value="" />
              <br></br>
              <label for="fname">Anio de publicacion:</label> <br></br>
              <input type="text" value="" />
            </form>
          </div>
          <br></br>
          <button className={classes.buttonCreate}>Crear nuevo registro</button>
        </div>
      </div>
    );
  }
}

export default App;
