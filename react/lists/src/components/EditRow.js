import React from 'react';
import {Table, Button} from 'semantic-ui-react';

export const EditRow = ({item, save, cancel, onChange, firstName, lastName, address, email, phone}) => {
    return(
        <Table.Row key={item.id}>
            <Table.Cell>
                <input type="text"
                    name="firstName"
                    onChange={(e) => onChange(e)}
                    value={firstName} />
            </Table.Cell>
            <Table.Cell>
                <input type="text"
                    name="lastName"
                    onChange={(e) => onChange(e)}
                    value={lastName} />
            </Table.Cell>
            <Table.Cell>
                <input type="text"
                    name="address"
                    onChange={(e) => onChange(e)}
                    value={address} />
            </Table.Cell>
            <Table.Cell>
                <input type="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={email} />
            </Table.Cell>
            <Table.Cell>
                <input type="text"
                    name="phone"
                    onChange={(e) => onChange(e)}
                    value={phone} />
            </Table.Cell>
            <Table.Cell>
                    <Button style={{backgroundColor: "green"}}
                            onClick={()=>save(item.id)}>
                        Save
                    </Button>
                </Table.Cell>
                <Table.Cell>  
                    <Button style={{backgroundColor: "red"}}
                            onClick={()=>cancel()}>
                        Cancel
                    </Button>
                </Table.Cell>
        </Table.Row>
    )
}
