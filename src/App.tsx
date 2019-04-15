import * as React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Header, Image, Modal } from 'semantic-ui-react';
import { formData } from './formData';
import { dropdownData } from './dropdownData';
import { connect } from 'react-redux';
import { setValue } from './actions';

interface IFormProps {
    formValues: {};
    setValue: any;
}

export class App extends React.Component<IFormProps> {

    state = { country: '', value: '' }
    handleChange = (e, { name, value }) => {
        this.setState({ value, [name]: value });
        this.props.setValue({ name, value });
    };

    render() {
        const obj = this.props.formValues;
        return (
            <div className="main">
                <div className='profile'>
                    <Form size='small'>
                        <Form.Group grouped={true}>
                            {formData.map((item) => (
                                <div key={item.id}>
                                    {
                                        item.type === "input" &&
                                        <Form.Input
                                            name={item.id}
                                            type={item.inputType ? item.inputType : 'text'}
                                            fluid={true}
                                            label={item.title}
                                            placeholder={item.title}
                                            onChange={this.handleChange}
                                        />
                                    }
                                    {
                                        item.type === "dropdown" &&
                                        <div>
                                            <span className='profile__title'>{item.title}</span>
                                            <Form.Select
                                                name={item.id}
                                                options={!item.dependOn ? dropdownData[item.id] : (dropdownData[item.id].filter((element) => element.id === this.state[item.dependOn]))}
                                                placeholder={item.title}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    }
                                </div>
                            ))}

                            <Modal trigger={<Button>Submit</Button>}>
                                <Modal.Header >Your Profile</Modal.Header>
                                <Modal.Content className="profile__content">
                                <div className="profile__modal">
                                    {Object.keys(obj).map(element => (
                                       
                                        <div key={element} className="profile__item">
                                            Your {element} is {obj[element]}.
                                        </div>
                                        
                                    ))}
                                    </div>
                                </Modal.Content>
                            </Modal>

                        </Form.Group>
                    </Form>

                </div>
            </div>
        )
    }
}



const mapStateToProps = store => {
    return {
        formValues: store.formValues,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setValue: element => dispatch(setValue(element))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)