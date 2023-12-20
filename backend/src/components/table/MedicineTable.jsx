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

function MedicineTable(props) {
    return (
        <div>
            <Table className="mt-5 overflow-hidden border-primary border rounded-md">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>medicine_id</TableHeaderCell>
                        <TableHeaderCell>medicine_name</TableHeaderCell>
                        <TableHeaderCell>medicine_type</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((data, index) => (
                        <TableRow className={` border-none ${index % 2 == 1 ? " bg-background":" bg-secondary"}`}>
                            <TableHeaderCell>{data.medicine_id}</TableHeaderCell>
                            <TableHeaderCell>{data.medicine_name}</TableHeaderCell>
                            <TableHeaderCell>{data.type_id}</TableHeaderCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MedicineTable