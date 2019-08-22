import React from 'react';
import {Table, Button} from 'semantic-ui-react';

export const RemoveRow = ({item, remove, cancel}) => {
    let buttonColor = "red";
    return <Table.Row key={item.id}>
                <Table.Cell>{item.firstName}</Table.Cell>
                <Table.Cell>{item.lastName}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
                <Table.Cell>
                    <Button style={{backgroundColor: buttonColor}}
                            onClick={()=>remove(item.id)}>
                        Remove
                    </Button>
                </Table.Cell>
                <Table.Cell>  
                    <Button style={{backgroundColor: buttonColor}}
                            onClick={()=>cancel()}>
                        Cancel
                    </Button>
                </Table.Cell>
            </Table.Row>
}