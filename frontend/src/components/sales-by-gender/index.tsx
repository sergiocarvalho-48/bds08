import PieChartCard from '../pie-chart-card';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-container base-card">
      <div className="sales-summary-data">
        <h1 className="sales-summary-total">R$ 746.484,00</h1>
        <span className="sales-summary-label">Total de vendas</span>
      </div>
      <div className="sales-summary-chart-container">
        <div className="sales-summary-chart">
          <PieChartCard labels={['Feminino', 'Masculino', 'Outro']} series={[50, 70, 30]} name="" />
        </div>
      </div>
    </div>
  );
}

export default SalesSummary;
