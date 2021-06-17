import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { MicroApp } from 'umi';
import styles from './Welcome.less';

export default () => {
  return (
    <PageContainer>
      <Card>
        <MicroApp name="react-app" />
      </Card>
    </PageContainer>
  );
};
