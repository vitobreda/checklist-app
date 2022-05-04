import {useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ChecklistContext, {CheckList} from '../models/Checklist';
const {useRealm, useQuery} = ChecklistContext;
import axios from 'axios';

const storageKey = '@checklist_app_sync';

const axiosInstance = axios.create({baseURL: 'http://192.168.100.139:3000'});

function useRequest() {
  const realm = useRealm();

  const storeSyncData = async () => {
    try {
      const syncData = new Date();
      await AsyncStorage.setItem(storageKey, syncData.toISOString());
    } catch (err) {
      console.log('print error: ', err);
    }
  };

  const getLastSyncData = async () => {
    try {
      const value = await AsyncStorage.getItem(storageKey);
      return value;
    } catch (err) {
      console.log('print error: ', err);
    }
  };

  const handleAddChecklist = useCallback(
    checklist => {
      if (!checklist) {
        return;
      }

      realm.write(() => {
        realm.create('Checklist', new CheckList(checklist));
      });
    },
    [realm],
  );

  const storeCheckList = useCallback(async () => {
    const result = useQuery('Checklist');
    const dateLastSync = await getLastSyncData();
    const checklists = result.filter(item => item.updated_at >= dateLastSync);
    storeSyncData();
  }, []);

  const postChecklist = async checklist => {
    axiosInstance
      .post('/checklists', checklist)
      .then(response => console.log(response));
  };

  const getChecklists = useCallback(async () => {
    const {data} = await axiosInstance.get('/checklists');
    const dateLastSync = await getLastSyncData();
    storeSyncData();

    const filteredData = dateLastSync
      ? data.filter(item => item.updated_at >= dateLastSync)
      : data;

    filteredData.map(item => {
      delete item.id;
      handleAddChecklist(item);
    });
  }, [handleAddChecklist]);

  useEffect(() => {
    getChecklists();
  }, [getChecklists]);

  return {postChecklist};
}

export default useRequest;
