import axios from 'axios';
import { baseUrl, Contest } from '.';

const Paths = {
  getContests: '/contest/list'
};

export async function getContests() {
  const url = baseUrl + Paths.getContests;
  try {
    const { data, status } = await axios.get(url);
    return data.map((contest: any) => {
      return {
        id: contest.id,
        name: contest.name,
        category: contest.category,
        group: contest.group,
        startDate: contest.startDate,
        endDate: contest.endDate
      } as Contest;
    });
  } catch (e) {
    return [];
  }
}