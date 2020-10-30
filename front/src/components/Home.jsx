import React from "react";
import {Link} from "react-router-dom";

export default () => (
<div>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col"></div>
        <div class="mdl-cell mdl-cell--4-col">
            <h3 class="mdl-typography--text-center">Welcome to OMDB</h3>
            <p class="mdl-typography--text-center">What do you want to do?</p>
        </div>
        <div class="mdl-cell mdl-cell--4-col"></div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--3-col"></div>
        <div class="mdl-cell mdl-cell--3-col">
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text mdl-typography--text-center">MOVIES</h2>
                </div>
                <div class="mdl-card__supporting-text mdl-typography--text-center">
                    Search any movies you want and get all the info about any movie.
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <Link to='/movies'><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-typography--text-center">
                    YES! Let me search please
                    </a></Link>
                </div>
            </div>
        </div>
        <div class="mdl-cell mdl-cell--3-col">
                <div class="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text mdl-typography--text-center">USERS</h2>
                    </div>
                    <div class="mdl-card__supporting-text mdl-typography--text-center">
                        Access to your profile and add favorites to your personal collection of movies. 
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <Link to='/users'>
                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-typography--text-center">
                                YES! Let me have access please
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        <div class="mdl-cell mdl-cell--3-col"></div>
    </div>
</div>
)