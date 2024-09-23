import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { QuestionsByCategory } from './components';
import { handleGetQuestions } from '../../actions/shared';

const TABS = [
  {
    key: 'new_questions',
    label: 'New Questions'
  },
  {
    key: 'done',
    label: 'Done'
  }
];

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.users);
  const questions = useSelector(state => state.questions);
  const [tab, setTab] = useState(TABS[0].key);
  const sortedQuestions = useMemo(() => {
    return questions ? Object.values(questions).sort((a, b) => b.timestamp - a.timestamp) : [];
  }, [questions]);

  const answeredQuestions = useMemo(() => {
    if (!user) {
      return [];
    }

    return sortedQuestions.filter(question => question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id));
  }, [sortedQuestions, user]);

  const unansweredQuestions = useMemo(() => {
    if (!user) {
      return [];
    }

    return sortedQuestions.filter(question => !question.optionOne.votes.includes(user.id) && !question.optionTwo.votes.includes(user.id));
  }, [sortedQuestions, user]);

  useEffect(() => {
    if (!questions || Object.keys(questions).length === 0) {
      dispatch(handleGetQuestions());
    }
  }, [dispatch, questions]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <TabContext value={tab}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleTabChange} aria-label='question-tabs'>
          {TABS.map(tab => (
            <Tab label={tab.label} key={tab.key} value={tab.key} />
          ))}
        </TabList>
        <TabPanel sx={{ px: 0 }} value={TABS[0].key}>
          <QuestionsByCategory title='New Questions' questions={unansweredQuestions} />
        </TabPanel>
        <TabPanel sx={{ px: 0 }} value={TABS[1].key}>
          <QuestionsByCategory title='Done' questions={answeredQuestions} />
        </TabPanel>
      </Box>
    </TabContext>
  );
};

export default Home;
