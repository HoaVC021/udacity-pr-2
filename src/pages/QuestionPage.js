import React from 'react';

import { Page } from '../components';
import { QuestionDetails } from '../features/question';

const QuestionPage = () => {
  return (
    <Page title="Question">
      <QuestionDetails />
    </Page>
  );
};

export default QuestionPage;
