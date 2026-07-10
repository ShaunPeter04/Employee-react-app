import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {

    const [empdata, changeData] = useState(

        [

            { "empcode": "EMP-2026-001", "name": "Eleanor Vance", "phone": "+91 98765 43210", "designation": "Senior Software Engineer" },
            { "empcode": "EMP-2026-002", "name": "Marcus Chen", "phone": "+91 91234 56789", "designation": "Product Manager" },
            { "empcode": "EMP-2026-003", "name": "Aisha Rahman", "phone": "+91 94470 12345", "designation": "UX/UI Designer" },
            { "empcode": "EMP-2026-004", "name": "Liam O'Connor", "phone": "+91 98950 87654", "designation": "Data Analyst" },
            { "empcode": "EMP-2026-005", "name": "Sofia Martinez", "phone": "+91 81290 23456", "designation": "HR Specialist" },
            { "empcode": "EMP-2026-006", "name": "David Kim", "phone": "+91 70123 45678", "designation": "Devops Engineer" },
            { "empcode": "EMP-2026-007", "name": "Priya Patel", "phone": "+91 96330 98765", "designation": "Marketing Manager" },
            { "empcode": "EMP-2026-008", "name": "Sofia Martinez", "phone": "+91 81290 23456", "designation": "HR Specialist" },
            { "empcode": "EMP-2026-009", "name": "Josin", "phone": "+91 81290 23456", "designation": "HR Specialist" },
            { "empcode": "EMP-2026-010", "name": "Vikas", "phone": "+91 81290 23456", "designation": "HR Specialist" },

        ]
    )

    return (
        <div>
            <NavigationBar />
            <table class="table table-warning table-hover w-75 mx-auto mt-4" align="center" >
                <thead>
                    <tr>
                        <th scope="col">Employee Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Designation</th>
                    </tr>
                </thead>
                <tbody>

                    {empdata.map(

                        (value, index) => {

                            return (

                                <tr key={value.empcode}>
                                    <td>{value.empcode}</td>
                                    <td>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.designation}</td>
                                </tr>
                            )
                        }


                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ViewEmployee