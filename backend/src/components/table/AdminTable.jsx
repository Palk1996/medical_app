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

function AdminTable() {

    return (
        <div>
            <Table className="mt-5 overflow-hidden border-primary border rounded-md">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>admin_ID</TableHeaderCell>
                        <TableHeaderCell>full_name</TableHeaderCell>
                        <TableHeaderCell>username</TableHeaderCell>
                        <TableHeaderCell>password</TableHeaderCell>
                        <TableHeaderCell>email</TableHeaderCell>
                        <TableHeaderCell>telephone</TableHeaderCell>
                        <TableHeaderCell>gender</TableHeaderCell>
                        <TableHeaderCell>birth</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminTable