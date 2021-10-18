import React from "react"
import { Conteudo, Conteudo_do_jogo_tabela_1, Conteudo_do_jogo_tabela_2, Conteudo_do_jogo_tabela_3, Conteudo_do_jogo_tabela_4, Conteudo_do_jogo_tabela_5, Conteudo_do_jogo_tabela_6, Conteudo_do_jogo_tabela_7, Conteudo_do_jogo_tabela_8, Conteudo_jogos, Informacoes_do_jogo, Principal, Titulo } from "./style"

export const Lista_de_jogadores = () => {
    return <Principal>
        <div>
            <Titulo>
                <h2>
                    lista de jogos
                </h2>
            </Titulo>
            <Conteudo>
                <Conteudo_jogos>
                    <Conteudo_do_jogo_tabela_1>
                        <tr>
                            Nome do jogo 1
                        </tr>
                        <tr>
                            4 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_1>
                    <Conteudo_do_jogo_tabela_2>
                        <tr>
                            Nome do jogo 2
                        </tr>
                        <tr>
                            10 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_2>
                    <Conteudo_do_jogo_tabela_3>
                        <tr>
                            Nome do jogo 3
                        </tr>
                        <tr>
                            5 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_3>
                    <Conteudo_do_jogo_tabela_4>
                        <tr>
                            Nome do jogo 4
                        </tr>
                        <tr>
                            7 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_4>
                    <Conteudo_do_jogo_tabela_5>
                        <tr>
                            Nome do jogo 5
                        </tr>
                        <tr>
                            8 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_5>
                    <Conteudo_do_jogo_tabela_6>
                        <tr>
                            Nome do jogo 6
                        </tr>
                        <tr>
                            3 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_6>
                    <Conteudo_do_jogo_tabela_7>
                        <tr>
                            Nome do jogo 7
                        </tr>
                        <tr>
                            6 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_7>
                    <Conteudo_do_jogo_tabela_8>
                        <tr>
                            Nome do jogo 8
                        </tr>
                        <tr>
                            9 participantes
                        </tr>
                    </Conteudo_do_jogo_tabela_8>
                </Conteudo_jogos>
                <Informacoes_do_jogo>
                    <h3>
                        CONVERSAS/CHAT
                    </h3>

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

                    <tr>
                        visualizar mais chats
                    </tr>
                    <div>
                        <h4>
                            TIMES/EQUIPES
                        </h4>
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

                        <tr>
                        visualizar mais chats
                        </tr>

                    </div>
                </Informacoes_do_jogo>
            </Conteudo>
        </div>
    </Principal >

}

