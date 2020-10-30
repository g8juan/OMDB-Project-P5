import React from "react";

const Register = ({handleChange, handleSubmit}) => (
    <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
            <div class="mdl-cell mdl-cell--3-col">
                <form onSubmit={handleSubmit}>
                    <h4>Sign In</h4>
                    <div>
                        <label>Email:</label>
                        <br/>
                        <input type="text" name='username'required onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <br/>
                        <input type="password" name='password' required onChange={handleChange}/>
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value='Sign In'/>
                    </div>
                </form>
            </div>
        <div class="mdl-layout-spacer"></div>
    </div>
)

export default Register