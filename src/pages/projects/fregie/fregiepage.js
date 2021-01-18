import React from 'react';
import { DESC } from './constants';
import { TITLES } from '../../../assets/titles';
import { SectionContainer, Title, Section } from '../constants';
import { PageContainer } from '../../constants';


class FregiePage extends React.Component {
    render() {
        return (
            <>
                <PageContainer>
                    <Title text={'fregie'} type={'title'} size={'large'} bold />
                    <SectionContainer>
                        <Section title={TITLES.SUMMARY} description={DESC.SUMMARY} />
                        <Section title={TITLES.PROCESS} description={DESC.PROCESS} />
                        <Section title={TITLES.TYPOGRAPHY} description={DESC.TYPOGRAPHY} />
                        <Section title={TITLES.LANGUAGE} description={DESC.LANGUAGE} />
                        <Section title={TITLES.COLOR} description={DESC.COLOR} />
                    </SectionContainer>
                </PageContainer>
            </>
        );
    }
};

export default FregiePage;
