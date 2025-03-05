import { useEffect, useState } from 'react';
import { api } from '../../services/api';


import { Container ,Brand ,Menu ,Search ,Content , NewNote } from './styles';
import { FiPlus } from 'react-icons/fi';

import {Header} from '../../components/Header';
import {ButtonText} from '../../components/ButtonText';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';


export function Home() {
    const [tags, setTags] = useState([]);

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags()
    },[])

    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                {
                    tags && tags.map(tag =>(
                        <li 
                        key={String(tag.id)}>
                            <ButtonText 
                            title = {tag.name} 
                            isActive  />
                        </li>
                    ))
                }
                
                
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