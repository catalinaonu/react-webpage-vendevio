import React from "react";
import Link from 'next/link';
import openJobs from "./Data/openPositions";
import {Table} from 'antd';

const arrayOfJobs = Object.keys(openJobs).map(key => ({...openJobs[key], key: key}));

const columns = [
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: '',
        key: 'position',
        render: (row) => <Link href="/jobs/[position]" as={`/jobs/${row.key}`}>
            <a>See Details</a></Link>
    },
];


const ListOfJobs = () => <>
    <Table
        columns={columns}
        dataSource={arrayOfJobs}
    >
    </Table>
</>


export default ListOfJobs