import React from "react";
import './Navigation.css'
import { Link } from "react-router-dom";
import { StickyNote, FilePlus } from 'lucide-react';

function SideBar() {
    return (
        <div>
            <div id="layoutSidenav_nav">
                <nav
                    className="sb-sidenav accordion sb-sidenav-dark"
                    id="sidenavAccordion"
                >
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to={"/home/dashboard"}>
                                <div className="sb-nav-link-icon">
                                <i class="fa-regular fa-clipboard fa-lg"></i>
                                </div>
                                Notes
                            </Link>
                            <Link className="nav-link" to={"/home/teamdetails"}>
                                <div className="sb-nav-link-icon">
                                <FilePlus strokeWidth={1} />
                                </div>
                                Create New Subject
                            </Link>

                            <div className="sb-sidenav-menu-heading">Hub</div>
                           

                            <a
                                className="nav-link collapsed"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsePages"
                                aria-expanded="false"
                                aria-controls="collapsePages"
                            >
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-book-open"></i>
                                </div>
                                All Subjects
                                <div className="sb-sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </a>
                            <div
                                className="collapse"
                                id="collapsePages"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#sidenavAccordion"
                            >
                                <nav
                                    className="sb-sidenav-menu-nested nav accordion"
                                    id="sidenavAccordionPages"
                                >
                                    <Link className="nav-link" to={`/home`}>
                                        note next 1
                                    </Link>
                                    <Link className="nav-link" to={`/home`}>
                                        note next 2
                                    </Link>
                                    <Link className="nav-link" to={`/home`}>
                                        note next 3
                                    </Link>
                                    <Link className="nav-link" to={`/home`}>
                                        note next 4
                                    </Link>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Support</div>

                            <Link className="nav-link" to={`/home/recycle`}>
                                <div className="sb-nav-link-icon">
                                    <i className="fas fa-table"></i>
                                </div>
                                Bin
                            </Link>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        <div>kathiravan</div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default SideBar;
