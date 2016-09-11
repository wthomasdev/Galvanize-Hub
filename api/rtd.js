const rtdArray = [ALine];

const ALine = {
    MonThurs: [0315,0345,0415,0430,0445,0500,0515,0530,0545,0600,0615,0630,0645,0700,0715,0730,0745,0800,0815,0830,0845,0900,0915,0930,0845,1000,1015,1030,1045,1100,1115,1130,1145,1200,1215,1230,1245,1300,1315,1330,1345,1400,1415,1430,1445,1500,1515,1530,1545,1600,1615,1630,1645,1700,1715,1730,1745,1800,1815,1830,1900,1930,2000,2030,2100,2130,2200,2230,2300,2330,0000,0030],
    Friday:
    [0315,0345,0415,0430,0445,0500,0515,0530,0545,0600,0615,0630,0645,0700,0715,0730,0745,0800,0815,0830,0845,0900,0915,0930,0945,1000,1015,1030,1045,1100,1115,1130,1200,1215,1230,1245,1300,1315,1330,1345,1400,1415,1430,1445,1500,1515,1530,1545,1600,1615,1630,1645,1700,1715,1730,1745,1800,1815,1830,1900,1930,2000,2030,2100,2130,2200,2230,2300,2330,0000,0030,0100]
    Saturday:
    [0315,0345,0415,0430,0445,0500,0515,0530,0545,0600,0615,0630,0645,0700,0715,0730,0745,0800,0815,0830,0845,0900,0915,0930,0945,1000,1015,1030,1045,1100,1115,1130,1200,1215,1230,1245,1300,1315,1330,1345,1400,1415,1430,1445,1500,1515,1530,1545,1600,1615,1630,1645,1700,1715,1730,1745,1800,1815,1830,1900,1930,2000,2030,2100,2130,2200,2230,2300,2330,0000,0030,0100],
    SundayHol:
    [0315,0345,0415,0430,0445,0500,0515,0530,0545,0600,0615,0630,0645,0700,0715,0730,0745,0800,0815,0830,0845,0900,0915,0930,0845,1000,1015,1030,1045,1100,1115,1130,1145,1200,1215,1230,1245,1300,1315,1330,1345,1400,1415,1430,1445,1500,1515,1530,1545,1600,1615,1630,1645,1700,1715,1730,1745,1800,1815,1830,1900,1930,2000,2030,2100,2130,2200,2230,2300,2330,0000,0030]
}

const BLine = {
  MonThurs:
  [0551,0621,0651,0721,0751,0821,0921,1021,1121,1221,1321,1421,1521,1551,1621,1651,1721,1751,1821,1851,1921,2021,2121,2221],
  Friday:
  [0551,0621,0651,0721,0751,0821,0921,1021,1121,1221,1321,1421,1521,1551,1621,1651,1721,1751,1821,1851,1921,2021,2121,2221],
  Saturday:[0621,0721,0821,0921,1021,1121,1221,1321,1421,1521,1621,1721,1821,1921,2021,2121,2221],
  SundayHol:[0621,0721,0821,0921,1021,1121,1221,1321,1421,1521,1621,1721,1821,1921,2021,2121,2221]
}

const CLine = {
  MonThurs:
  [0519,0549,0619,0649,0719,0749,0819,0849,0919,0949,1019,1049,1119,1149,1219,1249,1319,1349,1419,1449,1519,1549,1619,1649,1719,1749,1819,1849,1919,1949,2019],
  Friday:
  [0519,0549,0619,0649,0719,0749,0819,0849,0919,0949,1019,1049,1119,1149,1219,1249,1319,1349,1419,1449,1519,1549,1619,1649,1719,1749,1819,1849,1919,1949,2019]
}

const ELine = {
  MonThurs:
  [0513,0543,0613,0628,0643,0658,0713,0728,0743,0758,0813,0837,0907,0937,1007,1037,1107,1137,1207,1237,1307,1337,1407,1437,1458,1513,1528,1543,1358,1613,1628,1643,1658,1713,1728,1743,1758,1813,1828,1843,1907,1937,2007,2037,2052,2107,2122,2137,2152,2212,2242,2312,0012,0112],
  Friday:
  [0513,0543,0613,0628,0643,0658,0713,0728,0743,0758,0813,0837,0907,0937,1007,1037,1107,1137,1207,1237,1307,1337,1407,1437,1458,1513,1528,1543,1358,1613,1628,1643,1658,1713,1728,1743,1758,1813,1828,1843,1907,1937,2007,2037,2052,2107,2122,2137,2152,2212,2242,2312,0012,0112,0142,0212],
  Saturday:
  [0537,0607,0637,0707,0737,0807,0822,0837,0852,0907,0922,0937,0952,1007,1022,1037,1052,1107,1122,1137,1152,1207,1222,1237,1252,1307,1322,1337,1352,1407,1422,1437,1452,1507,1522,1537,1552,1607,1622,1637,1652,1707,1722,1737,1752,1807,1822,1837,1852,1907,1922,1937,1952,2007,2022,2037,2052,2107,2122,2137,2152,2212,2242,2312,2342,0012,0042,0112,0142,0212],
  SundayHol:
  [0537,0607,0637,0707,0737,0807,0822,0837,0852,0907,0922,0937,0952,1007,1022,1037,1052,1107,1122,1137,1152,1207,1222,1237,1252,1307,1322,1337,1352,1407,1422,1437,1452,1507,1522,1537,1552,1607,1622,1637,1652,1707,1722,1737,1752,1807,1822,1837,1852,1907,1922,1937,1952,2007,2022,2037,2052,2107,2122,2137,2152,2212,2242,2312,0012,0112]
}

const WLine = {
  MonThurs:
  [0443,0501,0516,0527,0531,0546,0557,0601,0616,0625,0631,0646,0655,0701,0716,0725,0731,0746,0755,0801,0816,0831,0846,0901,0916,0931,0946,1001,1016,1031,1046,1101,1116,1131,1146,1201,1216,1231,1246,1301,1316,1331,1346,1401,1416,1431,1446,1501,1510,1516,1531,1540,1546,1601,1610,1616,1631,1640,1646,1701,1710,1716,1731,1740,1746,1801,1816,1831,1846,1901,1916,1931,1946,2001,2016,2031,2046,2101,2116,2131,2146,2201,2216,2245,2315,0015,0115],
  Friday:
  [0443,0501,0516,0527,0531,0546,0557,0601,0616,0625,0631,0646,0655,0701,0716,0725,0731,0746,0755,0801,0816,0831,0846,0901,0916,0931,0946,1001,1016,1031,1046,1101,1116,1131,1146,1201,1216,1231,1246,1301,1316,1331,1346,1401,1416,1431,1446,1501,1510,1516,1531,1540,1546,1601,1610,1616,1631,1640,1646,1701,1710,1716,1731,1740,1746,1801,1816,1831,1846,1901,1916,1931,1946,2001,2016,2031,2046,2101,2116,2131,2146,2201,2216,2245,2315,2345,0015,0045,0115,0145,0215],
  Saturday:
  [0440,0515,0546,0616,0646,0701,0716,0731,0746,0801,0816,0831,0846,0901,0916,0931,0946,1001,1016,1031,1046,1101,1116,1131,1146,1201,1216,1231,1246,1301,1316,1331,1346,1401,1416,1431,1446,1501,1516,1531,1546,1601,1616,1631,1646,1701,1716,1731,1746,1801,1816,1831,1846,1901,1916,1931,1946,2001,2016,2031,2046,2101,2116,2131,2146,2201,2216,2245,2315,2345,0015,0045,0115,0145,0215],
  SundayHol:
  [0440,0515,0546,0616,0646,0701,0716,0731,0746,0801,0816,0831,0846,0901,0916,0931,0946,1001,1016,1031,1046,1101,1116,1131,1146,1201,1216,1231,1246,1301,1316,1331,1346,1401,1416,1431,1446,1501,1516,1531,1546,1601,1616,1631,1646,1701,1716,1731,1746,1801,1816,1831,1846,1901,1916,1931,1946,2001,2016,2031,2046,2101,2116,2131,2146,2201,2216,2245,2315,2345,0015,0045,0115]
}






module.exports = rtdArray;