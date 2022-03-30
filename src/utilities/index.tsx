import NetInfo from '@react-native-community/netinfo';

export const withNetwork = (action: any, onNetworkError: any) => {
  NetInfo.fetch()
    .then(state => {
      if (state.isConnected) {
        action();
      } else {
        if (onNetworkError) {
          onNetworkError('Could not connect to Internet');
        }
      }
    })
    .catch(e => {
      if (onNetworkError) {
        onNetworkError('Could not connect to Internet', e);
      }
    });
};
