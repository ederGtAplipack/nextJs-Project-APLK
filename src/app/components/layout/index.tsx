import { Menu } from 'app/components/layout/menu'

export const Layout: React.FC = () => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu/>
                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-heder-title">
                                    Cadastro
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    Conteudo
                                </div>                                
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
        </div>
    )
}