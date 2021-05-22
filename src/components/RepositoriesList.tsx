import { useState } from 'react';
import { useSelector} from 'react-redux'
import { useTypedSelector} from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
     const {data, error, loading} = useTypedSelector((state)=>state.repositories);
     console.log('data', data);
     console.log('error', error);
     console.log('loading', loading);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h4>{error}</h4>}
        {loading && <h2>Loading...</h2>}
        {!error && !loading && data.map((name)=><div key = {name}>{name}</div>)}
    </div>
};

export default RepositoriesList;