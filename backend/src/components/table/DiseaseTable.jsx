import React from 'react'
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";

function DiseaseTable(props) {
    return (
        <div>
            <Table className="mt-5 border-primary border rounded-md">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>disease_id</TableHeaderCell>
                        <TableHeaderCell>disease_name_thai</TableHeaderCell>
                        <TableHeaderCell>disease_name_eng</TableHeaderCell>
                        <TableHeaderCell>description</TableHeaderCell>
                        <TableHeaderCell>symptom</TableHeaderCell>
                        <TableHeaderCell>medicine_id</TableHeaderCell>
                        <TableHeaderCell>medicine_usage</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((data, index) => (
                    <TableRow>
                        <TableHeaderCell>{ data.disease_id }</TableHeaderCell>
                        <TableHeaderCell>{ data.disease_name_th }</TableHeaderCell>
                        <TableHeaderCell>{ data.disease_name_en }</TableHeaderCell>
                        <TableHeaderCell>{ data.description }</TableHeaderCell>
                        <TableHeaderCell>{ data.symptom.length > 15 ? data.symptom.slice(0, 15) + "..." : data.symptom}</TableHeaderCell>
                        <TableHeaderCell>{ data.medicine_id }</TableHeaderCell>
                        <TableHeaderCell>{ data.medicine_usage }</TableHeaderCell>
                    </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    )
}

export default DiseaseTable