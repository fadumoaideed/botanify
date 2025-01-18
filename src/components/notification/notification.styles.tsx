import styled from '@emotion/styled';

export const Notification = styled.div`
  .notification {
    padding: 12px 16px;
    margin: 8px 0;
    border-radius: 6px;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    max-width: 400px;
  }

  .notification:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .notification.warning {
    background-color: #fef3c7;
    border-left: 4px solid #f59e0b;
    color: #92400e;
  }

  .notification.info {
    background-color: #e0f2fe;
    border-left: 4px solid #0ea5e9;
    color: #075985;
  }
`;
