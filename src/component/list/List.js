import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function List({ isData, getId }) {
    return (
        <div>
            {
                isData.map((d, i) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {d.service}
                                </CardSubtitle>
                                <CardText>
                                    {d.price}
                                </CardText>
                                <Button onClick={() => getId(d.id)}>Click</Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;