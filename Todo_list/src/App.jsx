import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input is not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                // Add a random id which is used to delete
                id: Math.random(),
                value: this.state.userInput,
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Function to delete item from list using id to delete
    deleteItem(key) {
        const list = [...this.state.list];

        // Filter values and leave value which we need to delete
        const updatedList = list.filter((item) => item.id !== key);

        // Update list in state
        this.setState({
            list: updatedList,
        });
    }

    // Function to edit an item
    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            this.setState({
                list: updatedTodos,
            });
        }
    };

    render() {
        return (
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <Row className="text-center mb-4">
                    <h2 className="font-weight-bold text-primary">TODO LIST</h2>
                </Row>

                <Row className="w-100 justify-content-center">
                    <Col md={8} lg={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Add item..."
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) => this.updateInput(item.target.value)}
                                aria-label="Add something"
                                aria-describedby="basic-addon2"
                                style={{ height: "50px" }}
                            />
                            <Button
                                variant="success"
                                size="lg"
                                onClick={() => this.addItem()}
                                className="ml-2"
                                style={{ height: "50px" }}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="w-100 justify-content-center">
                    <Col md={8} lg={6}>
                        <ListGroup>
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                    <ListGroup.Item
                                        key={index}
                                        className="d-flex justify-content-between align-items-center mb-2 shadow-sm"
                                        variant="light"
                                    >
                                        <span>{item.value}</span>
                                        <span>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => this.deleteItem(item.id)}
                                                className="mr-2"
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="warning"
                                                size="sm"
                                                onClick={() => this.editItem(index)}
                                            >
                                                Edit
                                            </Button>
                                        </span>
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
