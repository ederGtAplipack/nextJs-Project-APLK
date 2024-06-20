import React from "react";

export const Menu : React.FC = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <li>
                    <a href="#">
                        <span className="icon"></span>Dashboard
                   </a>
                </li>
            </ul>
        </aside>
    )
}