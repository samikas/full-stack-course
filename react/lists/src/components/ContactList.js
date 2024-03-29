import React from 'react';
import {Table} from 'semantic-ui-react';
import { RemoveRow } from './RemoveRow';
import { NormalRow } from './NormalRow';
import { EditRow } from './EditRow';

export default class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            removeId:0,
            editId:0
        }
    }

    remove = (id) =>{
        let tempId = parseInt(id,10);
        if(this.state.removeId === 0){
            this.setState({
                removeId: tempId,
                editId:0
            })
            return;
        }
        if(tempId === this.state.removeId){
            this.props.remove(id);
        }
        this.cancel();
    }

    cancel = () => {
        this.setState({
            removeId: 0,
            editId:0,
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            phone:""
        })
    }
    
    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    edit = (id, item) =>{
        let tempId = parseInt(id,10);
        if(this.state.editId === 0){
            if(!item){
                return;
            }
            this.setState({
                editId: tempId,
                removeId: 0,
                firstName: item.firstName,
                lastName: item.lastName,
                address: item.address,
                email: item.email,
                phone: item.phone
            })
            return;
        }
        if(tempId === this.state.editId){
            let contact = {
                id:tempId,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                email: this.state.email,
                phone: this.state.phone
            }
            this.props.editContact(contact, id);
        }
        this.cancel();
    }

    render(){
        if(this.props.list.length===0){
            return(
                <div></div>
            )
        }else{
            let listItems = this.props.list.map(item =>{
                if(this.state.editId===0){
                    if(this.state.removeId === item.id){
                        return <RemoveRow key={item.id}
                                item={item}
                                remove={this.remove}
                                cancel={this.cancel} />

                    } else {
                        return(
                        <NormalRow key={item.id}
                                item={item}
                                remove={this.remove}
                                edit={this.edit} />
                        )
                    }
                    
                }else{
                    if(this.state.editId === item.id){
                        return <EditRow key={item.id}
                            item={item}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            address={this.state.address}
                            email={this.state.email}
                            phone={this.state.phone}
                            save={this.edit}
                            cancel={this.cancel} 
                            onChange={this.onChange} />

                    }else{
                        return(
                            <NormalRow key={item.id}
                                    item={item}
                                    remove={this.remove}
                                    edit={this.edit} />
                            )
                    }
                }
        })
        return(
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                        <Table.HeaderCell>Edit / Cancel</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {listItems}
                </Table.Body>
            </Table>
        )}
    }
}