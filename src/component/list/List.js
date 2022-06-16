import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function List({ isData }) {
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
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;