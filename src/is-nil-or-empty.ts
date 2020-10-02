import isEmpty from './is-empty';

const isNilOrEmpty = <T extends any>(obj: T) => obj == null || isEmpty(obj);

export default isNilOrEmpty;
