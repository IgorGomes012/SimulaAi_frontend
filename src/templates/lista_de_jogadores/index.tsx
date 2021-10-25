import React from "react"
import { Conteudo, Tabela_parte1, Conteudo_do_jogo_corpo2, Tabela_de_informacoes_ajuda, Tabela_de_informacoes_ajuda2, Tabela_de_informacoes_conteudo2, Tabela_de_informacoes_conteudo, Conteudo_do_jogo_tabela_1, Conteudo_jogos1, Conteudo_do_jogo_tabela_2, Conteudo_do_jogo_tabela_3, Conteudo_do_jogo_tabela_4, Conteudo_do_jogo_tabela_5, Conteudo_do_jogo_tabela_6, Conteudo_do_jogo_tabela_7, Conteudo_do_jogo_tabela_8, Conteudo_jogos, Informacoes_do_jogo, Principal, Titulo, Tabela_de_informacoes_title, Tabela_de_informacoes_title2, Tabela_parte2, Conteudo_do_jogo_title1, Conteudo_do_jogo_title2, Conteudo_do_jogo_corpo1, Conteudo_do_jogo_title3, Conteudo_do_jogo_corpo3, Conteudo_do_jogo_title4, Conteudo_do_jogo_corpo4, Conteudo_do_jogo_title5, Conteudo_do_jogo_corpo5, Conteudo_do_jogo_corpo8, Conteudo_do_jogo_title8, Conteudo_do_jogo_corpo7, Conteudo_do_jogo_title7, Conteudo_do_jogo_corpo6, Conteudo_do_jogo_title6, Barra_progresso1, Barra_progresso2, Barra_progresso8, Barra_progresso7, Barra_progresso6, Barra_progresso5, Barra_progresso4, Barra_progresso3 } from "./style"

export const Lista_de_jogadores = () => {
    return <Principal>
        
        <Conteudo>
            <Titulo>
             <tr>
                LISTA DE JOGOS
             </tr>
            </Titulo> 
            <Conteudo_jogos>
                <Conteudo_do_jogo_tabela_1>
                    <Conteudo_do_jogo_title1>
                        <tr>
                            Nome do jogo 1
                        </tr>
                    </Conteudo_do_jogo_title1>
                    <Conteudo_do_jogo_corpo1>
                        <tr>
                            4 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo1>
                <Barra_progresso1 className= "progress">
                </Barra_progresso1>
                </Conteudo_do_jogo_tabela_1>
                        
                <Conteudo_do_jogo_tabela_2>
                    <Conteudo_do_jogo_title2>
                        <tr>
                            Nome do jogo 2
                        </tr>
                    </Conteudo_do_jogo_title2>
                    <Conteudo_do_jogo_corpo2>
                        <tr>
                            10 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo2>
                    <Barra_progresso2 className= "progress">
                    </Barra_progresso2>
                </Conteudo_do_jogo_tabela_2>
                <Conteudo_do_jogo_tabela_3>

                    <Conteudo_do_jogo_title3>
                        <tr>
                            Nome do jogo 3
                        </tr>
                    </Conteudo_do_jogo_title3>
                    <Conteudo_do_jogo_corpo3>
                        <tr>
                            5 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo3>
                    <Barra_progresso3 className= "progress">
                    </Barra_progresso3>
                </Conteudo_do_jogo_tabela_3>

                <Conteudo_do_jogo_tabela_4>
                    <Conteudo_do_jogo_title4>
                        <tr>
                            Nome do jogo 4
                        </tr>
                    </Conteudo_do_jogo_title4>
                    <Conteudo_do_jogo_corpo4>
                        <tr>
                            7 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo4>
                    <Barra_progresso4 className= "progress">

                    </Barra_progresso4>
                </Conteudo_do_jogo_tabela_4>
        </Conteudo_jogos>
            <Conteudo_jogos1>

                <Conteudo_do_jogo_tabela_5>
                    <Conteudo_do_jogo_title5>
                        <tr>
                            Nome do jogo 5
                        </tr>
                    </Conteudo_do_jogo_title5>
                    <Conteudo_do_jogo_corpo5>
                        <tr>
                            8 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo5>
                    <Barra_progresso5 className= "progress">

                    </Barra_progresso5>
                </Conteudo_do_jogo_tabela_5>
                <Conteudo_do_jogo_tabela_6>
                    <Conteudo_do_jogo_title6>
                        <tr>
                            Nome do jogo 6
                        </tr>
                    </Conteudo_do_jogo_title6>
                    <Conteudo_do_jogo_corpo6>
                        <tr>
                            3 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo6>
                    <Barra_progresso6 className= "progress" >
                       
                    </Barra_progresso6>
                </Conteudo_do_jogo_tabela_6>
                <Conteudo_do_jogo_tabela_7>
                    <Conteudo_do_jogo_title7>
                        <tr>
                            Nome do jogo 7
                        </tr>
                    </Conteudo_do_jogo_title7>
                    <Conteudo_do_jogo_corpo7>
                        <tr>
                            6 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo7>
                    <Barra_progresso7 className= "progress">

                    </Barra_progresso7>
                </Conteudo_do_jogo_tabela_7>
                <Conteudo_do_jogo_tabela_8>
                    <Conteudo_do_jogo_title8>
                        <tr>
                            Nome do jogo 8
                        </tr>
                    </Conteudo_do_jogo_title8>
                    <Conteudo_do_jogo_corpo8>
                        <tr>
                            9 participantes
                        </tr>
                    </Conteudo_do_jogo_corpo8>
                    <Barra_progresso8 className= "progress">

                    </Barra_progresso8>
                </Conteudo_do_jogo_tabela_8>
            </Conteudo_jogos1>
            <Informacoes_do_jogo>

                <Tabela_parte1>
                    <Tabela_de_informacoes_title>
                        <tr>
                            CONVERSAS/CHAT
                        </tr>
                    </Tabela_de_informacoes_title>
                    <Tabela_de_informacoes_conteudo>
                        <tr>
                            Adiministração 21/2
                            <tr>
                                Engenharia 21/2
                            </tr>
                            Marketing 21/2
                            <tr>
                                ADS 21/2
                            </tr>
                        </tr>
                    </Tabela_de_informacoes_conteudo>
                    <Tabela_de_informacoes_ajuda>
                        <p>
                            visualizar mais chats
                        </p>
                    </Tabela_de_informacoes_ajuda>
                </Tabela_parte1>
                <Tabela_parte2>
                    <Tabela_de_informacoes_title2>
                        <tr>
                            TIMES/EQUIPES
                        </tr>
                    </Tabela_de_informacoes_title2>
                    <Tabela_de_informacoes_conteudo2>
                        <tr>
                            Adiministração 21/2
                        </tr>
                        <tr>
                            Engenharia 21/2
                        </tr>
                        <tr>
                            Marketing 21/2
                        </tr>
                        <tr>
                            ADS 21/2
                        </tr>
                    </Tabela_de_informacoes_conteudo2>
                    <Tabela_de_informacoes_ajuda2>
                        <p>
                            visualizar mais chats
                        </p>
                    </Tabela_de_informacoes_ajuda2>
                </Tabela_parte2>
            </Informacoes_do_jogo>
        </Conteudo>
    </Principal >

}

