import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithConsoleReport('Arsenal');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
