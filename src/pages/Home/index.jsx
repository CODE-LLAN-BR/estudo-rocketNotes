import { Container ,Brand ,Menu ,Search ,Content , NewNote } from './styles';
import { FiPlus } from 'react-icons/fi';


import {Header} from '../../components/Header';
import {ButtonText} from '../../components/ButtonText';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';


export function Home() {
    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title = "Todos" isActive  /></li>
                <li><ButtonText title = "Frontend" /></li>
                <li><ButtonText title = "Node"/></li>
                <li><ButtonText title = "React"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title:'React',
                        tags:[
                             {id:'13',name:'React'},
                             {id:'14',name:'Node'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to = "new">
                <FiPlus/>
                Criar Nota
            </NewNote>


        </Container>
    );
};