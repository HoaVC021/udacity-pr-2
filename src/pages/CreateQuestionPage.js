import React from 'react';

import { CreateQuestionForm } from '../features/question';
import { Page } from '../components';

const CreateQuestionPage = () => {
  return (
    <Page title="Create Question">
      <CreateQuestionForm />
    </Page>
  );
};

export default CreateQuestionPage;
