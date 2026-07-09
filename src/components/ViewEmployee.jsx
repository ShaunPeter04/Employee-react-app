import React from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {
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
                    <tr>
                        <th scope="row">EMP-2026-001</th>
                        <td>Eleanor Vance</td>
                        <td>+91 98765 43210</td>
                        <td>Senior Software Engineer</td>
                    </tr>
                    <tr>
                        <th scope="row">EMP-2026-002</th>
                        <td>Marcus Chen</td>
                        <td>+91 91234 56789</td>
                        <td>Product Manager</td>
                    </tr>
                    <tr>
                        <th scope="row">EMP-2026-003</th>
                        <td>Aisha Rahman</td>
                        <td>+91 94470 12345</td>
                        <td>UX/UI Designer</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-004</th>
                        <td>Liam O'Connor</td>
                        <td>+91 98950 87654</td>
                        <td>Data Analyst</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-005</th>
                        <td>Sofia Martinez</td>
                        <td>+91 81290 23456</td>
                        <td>HR Specialist</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-006</th>
                        <td>David Kim</td>
                        <td>+91 70123 45678</td>
                        <td>DevOps Engineer</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-007</th>
                        <td>Priya Patel</td>
                        <td>+91 96330 98765</td>
                        <td>Marketing Manager</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-008</th>
                        <td>James Wilson</td>
                        <td>+91 85470 11223</td>
                        <td>QA Automation Engineer</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-009</th>
                        <td>Elena Rostova</td>
                        <td>+91 90720 44556</td>
                        <td>Financial Controller</td>
                    </tr>

                    <tr>
                        <th scope="row">EMP-2026-010</th>
                        <td>Tariq Al-Mansoor</td>
                        <td>+91 95620 77889</td>
                        <td>IT Support Specialist</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ViewEmployee