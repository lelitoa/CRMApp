import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Reports
          </Button>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="140px"
          >
            <StatBox
              title="777"
              subtitle="Emails Sent"
              progress="0.7"
              increase="+7%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="140px"
          >
            <StatBox
              title="7777"
              subtitle="Sales Obtained"
              progress="0.7"
              increase="+7%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="140px"
          >
            <StatBox
              title="777"
              subtitle="New Clients"
              progress="0.70"
              increase="+70%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Box>
        <Box gridColumn="span 8">
          <Box
            backgroundColor={colors.primary[400]}
            height="400px"
            p="30px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $77777777
            </Typography>
            <Box height="250px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            overflow="auto"
            height="400px"
            p="30px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
              marginBottom="15px"
            >
              Transactions
            </Typography>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            height="400px"
            p="30px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $777.777 revenue
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            height="400px"
            p="30px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
            >
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 4">
          <Box
            backgroundColor={colors.primary[400]}
            height="400px"
            p="30px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "0 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
