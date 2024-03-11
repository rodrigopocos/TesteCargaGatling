var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "27",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "6"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "13",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "1"
    },
    "percentiles1": {
        "total": "8",
        "ok": "9",
        "ko": "5"
    },
    "percentiles2": {
        "total": "16",
        "ok": "17",
        "ko": "6"
    },
    "percentiles3": {
        "total": "31",
        "ok": "32",
        "ko": "6"
    },
    "percentiles4": {
        "total": "35",
        "ok": "35",
        "ko": "6"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.286",
        "ko": "0.143"
    }
},
contents: {
"req_put-usuario-54bfe": {
        type: "REQUEST",
        name: "PUT_Usuario",
path: "PUT_Usuario",
pathFormatted: "req_put-usuario-54bfe",
stats: {
    "name": "PUT_Usuario",
    "numberOfRequests": {
        "total": "30",
        "ok": "27",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "36",
        "ok": "36",
        "ko": "6"
    },
    "meanResponseTime": {
        "total": "12",
        "ok": "13",
        "ko": "5"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "1"
    },
    "percentiles1": {
        "total": "8",
        "ok": "9",
        "ko": "5"
    },
    "percentiles2": {
        "total": "16",
        "ok": "17",
        "ko": "6"
    },
    "percentiles3": {
        "total": "31",
        "ok": "32",
        "ko": "6"
    },
    "percentiles4": {
        "total": "35",
        "ok": "35",
        "ko": "6"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.286",
        "ko": "0.143"
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
