import React from 'react';
import { IconDelete, IconEdit } from '@arco-design/web-react/icon';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { ITemplate } from '@demo/services/template';

interface CardItemProps {
  data: ITemplate;
  handleDelete: (id: number) => void;
}

export function CardItem(props: CardItemProps) {
  const { data,handleDelete } = props;

  return (
    <div
      key={data.id}
      className={styles.templeteItem}
      style={{ backgroundImage: `url(${data.picture})` }}
    >
      <div className={styles.bottom}>
        <div className={styles.title}>Title: {data.subject}</div>
        <div className={styles.title}>
          Date: {dayjs(data.updatedAt).format('DD/MM/YYYY (HH[h]mm)')}
        </div>
      </div>
      <div className={styles.mask}>
        <div className={styles.listBottom}>
          <div className={styles.listItem}>
            <Link
              to={`/editor/${data.id}`}
            >
              <IconEdit />
              &nbsp;Edit
            </Link>
            <span className={styles.delete} onClick={() => handleDelete(data.id)}><IconDelete />&nbsp;Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}
