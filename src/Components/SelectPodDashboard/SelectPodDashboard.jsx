import React, { useEffect } from 'react';
import * as styles from './SelectPodDashboard.module.scss';
import PodCard from './PodCard';
import { nanoid } from 'nanoid';
import { getNamespace, setCurrentNamespace, setStatus } from '../../features/namespaceSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectPodDashboard() {
    // const location = useLocation();
    const namespaceState = useSelector(state => state.namespace.namespaceState);
    const status = useSelector(state => state.namespace.status);
    const dispatch = useDispatch();
    let currentNamespace = useSelector(state => state.namespace.currentNamespace);
    // const [namespaceState, setNamespaceState] = useState({ PODS: [] });
    if (localStorage['currentNamespace']) dispatch(setCurrentNamespace(localStorage.getItem('currentNamespace')));
    if (!namespaceState) dispatch(setStatus('idle'));

    console.log('NAMESPACE FROM CARD: ', currentNamespace);
    console.log('STATUS BEG: ', status);

    useEffect(() => {
        // if (shouldRun.current) {
        if (status == 'idle') {
            console.log('DISPATCHING!!!');
            dispatch(getNamespace(currentNamespace));
        }
        // }
        // shouldRun.current = false;
    }, [status]);


    console.log('state = ', namespaceState);
    let podCards
    if (status == 'DONE') {
        console.log('STATUS: ', status);
        podCards = namespaceState.PODS.map((pod) => {
            return <PodCard key={nanoid()} pod={pod} />;
        });
    }
    else { podCards = 'Loading...' };

    return (
        <main className={styles.main}>
            <div className={styles.namespace}>
                <h1 className={`${styles.h1} poppins lg regular`}>
                    <span className={styles.listItem}>Namespace Name:</span>default
                </h1>
                <div className={`${styles.podCardsContainer} barlow m regular`}>
                    {podCards}
                </div>
            </div>
        </main>
    );
}
