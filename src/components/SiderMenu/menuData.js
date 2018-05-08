export default [
  {
    'children': [
      {
        'name': 'license列表',
        'path': '/license',
        'icon': null,
        'id': 10,
        'priority': 1,
        'parentId': 9
      },
      {
        'children': [
          {
            'children': null,
            'name': '数据统计',
            'path': '/resource/computer/data',
            'icon': null,
            'id': 222,
            'priority': 1,
            'parentId': 13
          },
          {
            'children': null,
            'name': '物理主机',
            'path': '/resource/computer/pHost',
            'icon': null,
            'id': 223,
            'priority': 2,
            'parentId': 13
          },
          {
            'children': null,
            'name': '虚拟主机',
            'path': '/resource/computer/vHost',
            'icon': null,
            'id': 224,
            'priority': 3,
            'parentId': 13
          }
        ],
        'name': '主机资源',
        'path': '/resourse/computer',
        'icon': null,
        'id': 13,
        'priority': 2,
        'parentId': 9
      },
      {
        'children': [
          {
            'children': null,
            'name': '网络设备',
            'path': '/resource/network/network',
            'icon': null,
            'id': 232,
            'priority': 1,
            'parentId': 184
          },
          {
            'children': null,
            'name': '安全设备',
            'path': '/resource/network/safety',
            'icon': null,
            'id': 233,
            'priority': 2,
            'parentId': 184
          },
          {
            'children': null,
            'name': 'IP管理',
            'path': '/resource/network/ip',
            'icon': null,
            'id': 234,
            'priority': 3,
            'parentId': 184
          },
          {
            'children': null,
            'name': 'VLAN管理',
            'path': '/resource/network/vlan',
            'icon': null,
            'id': 300,
            'priority': 4,
            'parentId': 184
          }
        ],
        'name': '网络资源',
        'path': 'app.resource.network',
        'icon': null,
        'id': 184,
        'priority': 3,
        'parentId': 9
      },
      {
        'children': null,
        'name': '存储资源',
        'path': '/resource/storage',
        'icon': null,
        'id': 185,
        'priority': 4,
        'parentId': 9
      }
    ],
    'name': 'license管理',
    'path': '/resource',
    'icon': 'book',
    'id': 9,
    'priority': 2,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': [
          {
            'children': null,
            'name': '宿主机',
            'path': '/platform/openstack/host',
            'icon': null,
            'id': 335,
            'priority': 1,
            'parentId': 116
          },
          {
            'children': null,
            'name': '虚拟机',
            'path': '/platform/openstack/vm',
            'icon': null,
            'id': 336,
            'priority': 2,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云硬盘',
            'path': '/platform/openstack/hardDisk',
            'icon': null,
            'id': 338,
            'priority': 3,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云网络',
            'path': '/platform/openstack/network',
            'icon': null,
            'id': 337,
            'priority': 4,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云路由',
            'path': '/platform/openstack/router',
            'icon': null,
            'id': 339,
            'priority': 5,
            'parentId': 116
          },
          {
            'children': null,
            'name': '防火墙',
            'path': '/platform/openstack/firewall',
            'icon': null,
            'id': 340,
            'priority': 6,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云负载',
            'path': '/platform/openstack/balancer',
            'icon': null,
            'id': 341,
            'priority': 7,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云镜像',
            'path': '/platform/openstack/image',
            'icon': null,
            'id': 342,
            'priority': 8,
            'parentId': 116
          },
          {
            'children': null,
            'name': '云快照',
            'path': '/platform/openstack/snapshot',
            'icon': null,
            'id': 343,
            'priority': 9,
            'parentId': 116
          },
          {
            'children': null,
            'name': '浮动IP',
            'path': '/platform/openstack/floatIp',
            'icon': null,
            'id': 344,
            'priority': 10,
            'parentId': 116
          },
          {
            'children': null,
            'name': '安全组',
            'path': '/platform/openstack/securityGroup',
            'icon': null,
            'id': 345,
            'priority': 11,
            'parentId': 116
          },
          {
            'children': null,
            'name': '规格',
            'path': '/platform/openstack/specificatio',
            'icon': null,
            'id': 346,
            'priority': 12,
            'parentId': 116
          },
          {
            'children': null,
            'name': '密钥',
            'path': '/platform/openstack/secretKey',
            'icon': null,
            'id': 347,
            'priority': 13,
            'parentId': 116
          }
        ],
        'name': 'OpenStack',
        'path': '/platform/openstack',
        'icon': null,
        'id': 116,
        'priority': 1,
        'parentId': 26
      },
      {
        'children': [
          {
            'children': null,
            'name': '数据中心',
            'path': '/platform/vmware/dc',
            'icon': null,
            'id': 322,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '主机集群',
            'path': '/platform/vmware/cluster',
            'icon': null,
            'id': 323,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '主机列表',
            'path': '/platform/vmware/host',
            'icon': null,
            'id': 324,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '虚机列表',
            'path': '/platform/vmware/vm',
            'icon': null,
            'id': 325,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '云资源池',
            'path': '/platform/vmware/pool',
            'icon': null,
            'id': 326,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '存储目录',
            'path': '/platform/vmware/dataStorage',
            'icon': null,
            'id': 327,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '数据存储',
            'path': '/platform/vmware/storage',
            'icon': null,
            'id': 328,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '网络视图',
            'path': '/platform/vmware/network',
            'icon': null,
            'id': 329,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '虚机模板',
            'path': '/platform/vmware/template',
            'icon': null,
            'id': 330,
            'priority': 1,
            'parentId': 117
          },
          {
            'children': null,
            'name': '虚机快照',
            'path': '/platform/vmware/snapshot',
            'icon': null,
            'id': 331,
            'priority': 1,
            'parentId': 117
          }
        ],
        'name': 'vCenter',
        'path': '/platform/vmware',
        'icon': null,
        'id': 117,
        'priority': 2,
        'parentId': 26
      },
      {
        'children': null,
        'name': '阿里云',
        'path': '/platform/aliyun',
        'icon': null,
        'id': 310,
        'priority': 3,
        'parentId': 26
      },
      {
        'children': null,
        'name': '京东云',
        'path': '/platform/jdCloud',
        'icon': null,
        'id': 307,
        'priority': 4,
        'parentId': 26
      },
      {
        'children': null,
        'name': 'APIC',
        'path': '/platform/apic',
        'icon': null,
        'id': 311,
        'priority': 6,
        'parentId': 26
      },
      {
        'children': null,
        'name': 'SCP',
        'path': '/platform/scp',
        'icon': null,
        'id': 313,
        'priority': 7,
        'parentId': 26
      },
      {
        'children': null,
        'name': '虚机概览',
        'path': '/platform/vmDashboard',
        'icon': null,
        'id': 312,
        'priority': 15,
        'parentId': 26
      },
      {
        'children': null,
        'name': '平台拓扑',
        'path': '/platform/topology',
        'icon': null,
        'id': 309,
        'priority': 17,
        'parentId': 26
      }
    ],
    'name': '平台管理',
    'path': 'app.platform',
    'icon': 'desktop',
    'id': 26,
    'priority': 3,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': [
          {
            'children': null,
            'name': '机器列表',
            'path': '/ops/install/host',
            'icon': null,
            'id': 216,
            'priority': 1,
            'parentId': 215
          },
          {
            'children': null,
            'name': '装机历史',
            'path': '/ops/install/history',
            'icon': null,
            'id': 217,
            'priority': 2,
            'parentId': 215
          }
        ],
        'name': '装机服务',
        'path': '/ops/install',
        'icon': null,
        'id': 215,
        'priority': 1,
        'parentId': 169
      },
      {
        'children': [
          {
            'children': null,
            'name': '备份作业',
            'path': '/ops/backup_recovery/backup/list',
            'icon': null,
            'id': 208,
            'priority': 1,
            'parentId': 144
          },
          {
            'children': null,
            'name': '定时备份',
            'path': '/ops/backup_recovery/cron/list',
            'icon': null,
            'id': 209,
            'priority': 2,
            'parentId': 144
          },
          {
            'children': null,
            'name': '备份记录',
            'path': '/ops/backup_recovery/history_backup/list',
            'icon': null,
            'id': 210,
            'priority': 3,
            'parentId': 144
          },
          {
            'children': null,
            'name': '恢复记录',
            'path': '/ops/backup_recovery/history_recovery/list',
            'icon': null,
            'id': 211,
            'priority': 4,
            'parentId': 144
          }
        ],
        'name': '备份恢复',
        'path': '/ops/backup_recovery',
        'icon': null,
        'id': 144,
        'priority': 2,
        'parentId': 169
      },
      {
        'children': null,
        'name': '软件安装',
        'path': '/ops/softinstall',
        'icon': null,
        'id': 173,
        'priority': 5,
        'parentId': 169
      },
      {
        'children': null,
        'name': '运维工具',
        'path': '/ops/tools/index',
        'icon': null,
        'id': 174,
        'priority': 7,
        'parentId': 169
      }
    ],
    'name': '运维中心',
    'path': 'app.ops',
    'icon': 'hdd',
    'id': 169,
    'priority': 4,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '作业统计',
        'path': '/task/dashboard',
        'icon': null,
        'id': 138,
        'priority': 1,
        'parentId': 137
      },
      {
        'children': null,
        'name': '常规作业',
        'path': '/task/general/list',
        'icon': null,
        'id': 141,
        'priority': 2,
        'parentId': 137
      },
      {
        'children': null,
        'name': '定时作业',
        'path': '/task/cron/list',
        'icon': null,
        'id': 142,
        'priority': 3,
        'parentId': 137
      },
      {
        'children': null,
        'name': '作业模板',
        'path': '/task/tpl/list',
        'icon': null,
        'id': 140,
        'priority': 4,
        'parentId': 137
      },
      {
        'children': null,
        'name': '执行历史',
        'path': '/task/history/list',
        'icon': null,
        'id': 143,
        'priority': 5,
        'parentId': 137
      },
      {
        'children': null,
        'name': '认证管理',
        'path': '/task/account',
        'icon': null,
        'id': 145,
        'priority': 8,
        'parentId': 137
      },
      {
        'children': null,
        'name': '命令审计',
        'path': '/task/command',
        'icon': null,
        'id': 188,
        'priority': 10,
        'parentId': 137
      }
    ],
    'name': '作业平台',
    'path': 'app.task',
    'icon': 'mobile',
    'id': 137,
    'priority': 5,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '视图管理',
        'path': '/monitor/view/list',
        'icon': null,
        'id': 194,
        'priority': 1,
        'parentId': 128
      },
      {
        'children': null,
        'name': '模板配置',
        'path': '/monitor/tpl/list',
        'icon': null,
        'id': 196,
        'priority': 2,
        'parentId': 128
      },
      {
        'children': null,
        'name': '采集插件',
        'path': '/monitor/install_collect',
        'icon': null,
        'id': 166,
        'priority': 3,
        'parentId': 128
      },
      {
        'children': null,
        'name': '告警规则',
        'path': '/monitor/alarm_rule',
        'icon': null,
        'id': 167,
        'priority': 4,
        'parentId': 128
      },
      {
        'children': null,
        'name': '分发策略',
        'path': '/monitor/alarm_send_policy',
        'icon': null,
        'id': 201,
        'priority': 5,
        'parentId': 128
      },
      {
        'children': null,
        'name': '告警管理',
        'path': '/monitor/alarm',
        'icon': null,
        'id': 129,
        'priority': 6,
        'parentId': 128
      }
    ],
    'name': '监控告警',
    'path': '/monitor',
    'icon': 'bar-chart',
    'id': 128,
    'priority': 7,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '配置仓库',
        'path': '/cmdb/repository',
        'icon': null,
        'id': 207,
        'priority': 1,
        'parentId': 205
      },
      {
        'children': null,
        'name': '配置模型',
        'path': '/cmdb/module',
        'icon': null,
        'id': 206,
        'priority': 2,
        'parentId': 205
      },
      {
        'children': null,
        'name': '关系维护',
        'path': '/cmdb/relation',
        'icon': null,
        'id': 299,
        'priority': 3,
        'parentId': 205
      }
    ],
    'name': ' C M D B',
    'path': '/cmdb',
    'icon': 'appstore-o',
    'id': 205,
    'priority': 8,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '脚本仓库',
        'path': '/repository/script',
        'icon': null,
        'id': 147,
        'priority': 1,
        'parentId': 122
      },
      {
        'children': null,
        'name': '软件仓库',
        'path': '/repository/software',
        'icon': null,
        'id': 148,
        'priority': 2,
        'parentId': 122
      },
      {
        'children': null,
        'name': '镜像仓库',
        'path': '/repository/imageRep',
        'icon': null,
        'id': 228,
        'priority': 5,
        'parentId': 122
      }
    ],
    'name': '仓库管理',
    'path': 'app.repository',
    'icon': 'pushpin-o',
    'id': 122,
    'priority': 9,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '产品定价',
        'path': '/money/productPricing',
        'icon': null,
        'id': 281,
        'priority': 1,
        'parentId': 280
      },
      {
        'children': null,
        'name': '资源计费',
        'path': '/money/resourcePricing',
        'icon': null,
        'id': 282,
        'priority': 2,
        'parentId': 280
      },
      {
        'children': null,
        'name': '资源计量',
        'path': '/money/resourceNum',
        'icon': null,
        'id': 283,
        'priority': 3,
        'parentId': 280
      },
      {
        'children': null,
        'name': '规格管理',
        'path': '/money/spec',
        'icon': null,
        'id': 192,
        'priority': 4,
        'parentId': 280
      }
    ],
    'name': '计量计费',
    'path': '/money',
    'icon': 'scan',
    'id': 280,
    'priority': 10,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '平台综合报表',
        'path': '/report/platform',
        'icon': null,
        'id': 286,
        'priority': 1,
        'parentId': 285
      },
      {
        'children': null,
        'name': '虚机综合报表',
        'path': '/report/vm',
        'icon': null,
        'id': 287,
        'priority': 2,
        'parentId': 285
      },
      {
        'children': null,
        'name': '主机综合报表',
        'path': '/report/host',
        'icon': null,
        'id': 288,
        'priority': 3,
        'parentId': 285
      },
      {
        'children': null,
        'name': '存储综合报表',
        'path': '/report/storage',
        'icon': null,
        'id': 289,
        'priority': 4,
        'parentId': 285
      },
      {
        'children': null,
        'name': '计量计费报表',
        'path': '/report/charge',
        'icon': null,
        'id': 290,
        'priority': 5,
        'parentId': 285
      },
      {
        'children': null,
        'name': '资源监控报表',
        'path': '/report/monitor',
        'icon': null,
        'id': 291,
        'priority': 6,
        'parentId': 285
      },
      {
        'children': null,
        'name': '租户管理报表',
        'path': '/report/tenant',
        'icon': null,
        'id': 292,
        'priority': 6,
        'parentId': 285
      }
    ],
    'name': '报表管理',
    'path': '/report',
    'icon': 'switcher',
    'id': 285,
    'priority': 11,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '服务目录',
        'path': '/server/catalogue',
        'icon': null,
        'id': 236,
        'priority': 1,
        'parentId': 235
      },
      {
        'children': null,
        'name': '流程模版',
        'path': '/server/template',
        'icon': null,
        'id': 284,
        'priority': 2,
        'parentId': 235
      },
      {
        'children': null,
        'name': '工单管理',
        'path': '/server/workorder',
        'icon': null,
        'id': 293,
        'priority': 3,
        'parentId': 235
      }
    ],
    'name': '服务流程',
    'path': 'app.server',
    'icon': 'rocket',
    'id': 235,
    'priority': 11,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '租户管理',
        'path': '/system/tenant',
        'icon': null,
        'id': 214,
        'priority': 1,
        'parentId': 40
      },
      {
        'children': null,
        'name': '项目管理',
        'path': '/system/project',
        'icon': null,
        'id': 334,
        'priority': 2,
        'parentId': 40
      },
      {
        'children': null,
        'name': '系统权限',
        'path': '/system/authority',
        'icon': null,
        'id': 69,
        'priority': 3,
        'parentId': 40
      },
      {
        'children': null,
        'name': '审计日志',
        'path': '/system/audit',
        'icon': null,
        'id': 115,
        'priority': 4,
        'parentId': 40
      },
      {
        'children': null,
        'name': '系统状态',
        'path': '/system/status',
        'icon': null,
        'id': 160,
        'priority': 5,
        'parentId': 40
      },
      {
        'children': null,
        'name': '系统字典',
        'path': '/system/dictionary',
        'icon': null,
        'id': 161,
        'priority': 6,
        'parentId': 40
      },
      {
        'children': null,
        'name': '系统设置',
        'path': '/system/setting',
        'icon': null,
        'id': 198,
        'priority': 7,
        'parentId': 40
      },
      {
        'children': null,
        'name': '首页配置',
        'path': '/system/setting_dashboard',
        'icon': null,
        'id': 301,
        'priority': 8,
        'parentId': 40
      },
      {
        'children': null,
        'name': '云账号管理',
        'path': '/system/account_manage',
        'icon': null,
        'id': 333,
        'priority': 9,
        'parentId': 40
      }
    ],
    'name': '系统管理',
    'path': 'app.system',
    'icon': 'setting',
    'id': 40,
    'priority': 12,
    'parentId': 0
  },
  {
    'children': [
      {
        'children': null,
        'name': '个人信息',
        'path': '/personal/info',
        'icon': null,
        'id': 104,
        'priority': 1,
        'parentId': 94
      },
      {
        'children': null,
        'name': '我的消息',
        'path': '/personal/message',
        'icon': null,
        'id': 151,
        'priority': 2,
        'parentId': 94
      },
      {
        'children': null,
        'name': '我的作业',
        'path': '/personal/task',
        'icon': null,
        'id': 308,
        'priority': 3,
        'parentId': 94
      },
      {
        'children': [
          {
            'children': null,
            'name': '我发起的',
            'path': '/personal/apply/mine',
            'icon': null,
            'id': 225,
            'priority': 1,
            'parentId': 153
          },
          {
            'children': null,
            'name': '待审批的',
            'path': '/personal/apply/unapply',
            'icon': null,
            'id': 226,
            'priority': 2,
            'parentId': 153
          },
          {
            'children': null,
            'name': '已审批的',
            'path': '/personal/apply/applied',
            'icon': null,
            'id': 227,
            'priority': 3,
            'parentId': 153
          }
        ],
        'name': '我的审批',
        'path': '/personal/apply',
        'icon': null,
        'id': 153,
        'priority': 4,
        'parentId': 94
      }
    ],
    'name': '个人中心',
    'path': '/personal',
    'icon': 'skype',
    'id': 94,
    'priority': 13,
    'parentId': 0
  }
]