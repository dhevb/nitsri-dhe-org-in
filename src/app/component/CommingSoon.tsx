"use client";
import React from "react";
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-200">
      <motion.div
        className="relative perspective-1000"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          style={{ width: 400 }}
          className="text-center transition-transform duration-300 transform rounded-2xl hover:scale-105"
          bordered={false}
        >
          <Title level={2}>🚀 We are Working on this Page 🚀</Title>
          <Paragraph>🔧 Will Update Soon. Stay tuned! 🔧</Paragraph>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
