import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      items: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    let items = [...this.state.items];

    let updatelist = items.filter(item => item.id !== id);

    this.setState({
      items: updatelist
    });
  }

  onChangeHandler(event) {
    let name = event.target.name;

    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }
  onSubmitHandler() {
    if (this.state.item.length !== 0) {
      let item = this.state.item;
      const newitem = {
        id: 1 + Math.random(),
        value: item
      };
      let items = this.state.items;

      items.push(newitem);

      this.setState({
        items: items,
        item: ""
      });
    } else {
      alert("Text is empty");
    }
  }

  render() {
    return (
      <div className="container">
        <p className="alert alert-danger m-2">Todo Application</p>
        <input
          value={this.state.item}
          name="item"
          onChange={this.onChangeHandler}
          type="text"
          className="form-control"
        />
        <button onClick={this.onSubmitHandler} className="btn btn-primary m-2">
          Add
        </button>

        {this.state.items.map(item => {
          return (
            <p>
              <ol
                onClick={() => this.onDeleteHandler(item.id)}
                key={item.id}
                className="alert alert-secondary"
              >
                {item.value}
              </ol>
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
