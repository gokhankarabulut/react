/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import OtherLanguageReusibility from '../internationalization/OtherLanguageReusibility';

class Header extends Component {

    // displayName
    static displayName = " Router_Header";

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state = {};

        // BIND
    } //end constructor

    // CDM

    // Function

    // Render
    render() {
        //object destructing
        const { logo, t }=this.props;
        //RETURN
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                          {/* <i className={this.props.logo}></i> */}
                          <i className={logo}></i> 
                        </a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">
                                    {/* {this.props.t("homepage")}  */}
                                        {t("homepage")} 
                                        <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                       {/* {this.props.t("about")} */}
                                       {t("about")} 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                       {/* {this.props.t("blog")} */}
                                       {t("blog")}
                                    </a>
                                </li>
                                
                            </ul>
                                {/* dil için 
                            ve yukarda kullandığımız {this.props.t("homepage")}
                             {this.props.t("about")}
                              {this.props.t("blog")}
                            
                            */}
                            <OtherLanguageReusibility/>

                            <form className="d-flex my-2 my-lg-0">
                                <input
                                    className="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>


            </React.Fragment>
        ) //end return
    } //end render
} //end class

// Higher Order Component
export default withTranslation()(Header);
