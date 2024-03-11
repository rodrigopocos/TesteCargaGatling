var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "205",
        "ko": "99795"
    },
    "minResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "6155"
    },
    "maxResponseTime": {
        "total": "69936",
        "ok": "5341",
        "ko": "69936"
    },
    "meanResponseTime": {
        "total": "37677",
        "ok": "739",
        "ko": "37753"
    },
    "standardDeviation": {
        "total": "16850",
        "ok": "373",
        "ko": "16784"
    },
    "percentiles1": {
        "total": "39023",
        "ok": "769",
        "ko": "39061"
    },
    "percentiles2": {
        "total": "53276",
        "ok": "821",
        "ko": "53291"
    },
    "percentiles3": {
        "total": "61532",
        "ok": "962",
        "ko": "61547"
    },
    "percentiles4": {
        "total": "64401",
        "ok": "1300",
        "ko": "64403"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 129,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 73,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 99795,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1234.568",
        "ok": "2.531",
        "ko": "1232.037"
    }
},
contents: {
"req_get-usuarios-e29a4": {
        type: "REQUEST",
        name: "GET_usuarios",
path: "GET_usuarios",
pathFormatted: "req_get-usuarios-e29a4",
stats: {
    "name": "GET_usuarios",
    "numberOfRequests": {
        "total": "100000",
        "ok": "205",
        "ko": "99795"
    },
    "minResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "6155"
    },
    "maxResponseTime": {
        "total": "69936",
        "ok": "5341",
        "ko": "69936"
    },
    "meanResponseTime": {
        "total": "37677",
        "ok": "739",
        "ko": "37753"
    },
    "standardDeviation": {
        "total": "16850",
        "ok": "373",
        "ko": "16784"
    },
    "percentiles1": {
        "total": "38982",
        "ok": "769",
        "ko": "39048"
    },
    "percentiles2": {
        "total": "53277",
        "ok": "821",
        "ko": "53293"
    },
    "percentiles3": {
        "total": "61536",
        "ok": "962",
        "ko": "61541"
    },
    "percentiles4": {
        "total": "64400",
        "ok": "1300",
        "ko": "64401"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 129,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 73,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 99795,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1234.568",
        "ok": "2.531",
        "ko": "1232.037"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
