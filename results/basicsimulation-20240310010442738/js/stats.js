var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1726",
        "ok": "1726",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles1": {
        "total": "998",
        "ok": "998",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1510",
        "ok": "1510",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 47
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 381,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "142.857",
        "ko": "-"
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
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1726",
        "ok": "1726",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1122",
        "ok": "1122",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "342",
        "ok": "342",
        "ko": "-"
    },
    "percentiles1": {
        "total": "998",
        "ok": "998",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1510",
        "ok": "1510",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1644",
        "ok": "1644",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1696",
        "ok": "1696",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 471,
    "percentage": 47
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 381,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "142.857",
        "ko": "-"
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
