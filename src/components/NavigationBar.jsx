import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid" color="red">
                    <a class="navbar-brand" href="# ">
                        <img src="https://media.licdn.com/dms/image/v2/C560BAQES_mcXo9Tw2w/company-logo_200_200/company-logo_200_200/0/1668538388743/angellist_talent_logo?e=2147483647&v=beta&t=zXGhUXozieXU6AKOsposhgOH_eX2vwACefg2NvzwslM" width="120px" height="120px"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add Employee</Link>
                            <Link class="nav-link" to="/search">Search Employee</Link>
                            <Link class="nav-link" to="/view">View Employee</Link>
                            <Link class="nav-link" to="/delete">Delete Employee</Link>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar